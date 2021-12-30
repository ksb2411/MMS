package kr.co.repository;

import java.util.List;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import kr.co.domain.ItemVO;

@Repository
public class ItemDAOImpl implements ItemDAO {

	@Inject
	private SqlSession sqlSession;

	private String NS = "kr.co.item";

	@Override
	public void insertItem(ItemVO vo) {
		sqlSession.insert(NS + ".insertItem", vo);

	}

	@Override
	public ItemVO read(String itemid) {

		return sqlSession.selectOne(NS + ".read", itemid);
	}

	@Override
	public ItemVO updateUI(String itemid) {

		return sqlSession.selectOne(NS + ".updateUI", itemid);
	}

	@Override
	public void update(ItemVO vo) {

		sqlSession.update(NS + ".update", vo);

	}

	@Override
	public void delete(ItemVO vo) {
		sqlSession.delete(NS+".delete", vo);
		
	}

	@Override
	public List<ItemVO> list() {
		
		return sqlSession.selectList(NS + ".list");
	}

	@Override
	public List<ItemVO> searchByName(String itemname) {
		// TODO Auto-generated method stub
		return sqlSession.selectList(NS + ".searchByName", itemname);
	}
}
