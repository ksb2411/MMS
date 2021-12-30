package kr.co.repository;

import java.util.List;

import kr.co.domain.ItemVO;

public interface ItemDAO {

	public void insertItem(ItemVO vo);

	public ItemVO read(String itemid);

	public ItemVO updateUI(String itemid);

	public void update(ItemVO vo);

	public void delete(ItemVO vo);

	public List<ItemVO> list();

	public List<ItemVO> searchByName(String itemname);

}
