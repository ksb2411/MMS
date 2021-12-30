package kr.co.domain;

import java.io.Serializable;
import java.util.Objects;

public class ItemVO implements Serializable{

	private static final long serialVersionUID = 1L;
	private String itemid;
	private String itemname;
	private int itemprice;
	private int itemcount;
	private String userid;
	
	public ItemVO() {}

	public ItemVO(String itemid, String itemname, int itemprice, int itemcount, String userid) {
		this.itemid = itemid;
		this.itemname = itemname;
		this.itemprice = itemprice;
		this.itemcount = itemcount;
		this.userid = userid;
	}	

	public ItemVO(String itemid, String itemname, int itemprice, int itemcount) {
		this.itemid = itemid;
		this.itemname = itemname;
		this.itemprice = itemprice;
		this.itemcount = itemcount;
	}

	public String getItemid() {
		return itemid;
	}

	public void setItemid(String itemid) {
		this.itemid = itemid;
	}

	public String getItemname() {
		return itemname;
	}

	public void setItemname(String itemname) {
		this.itemname = itemname;
	}

	public int getItemprice() {
		return itemprice;
	}

	public void setItemprice(int itemprice) {
		this.itemprice = itemprice;
	}

	public int getItemcount() {
		return itemcount;
	}

	public void setItemcount(int itemcount) {
		this.itemcount = itemcount;
	}

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public int hashCode() {
		return Objects.hash(itemcount, itemid, itemname, itemprice, userid);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ItemVO other = (ItemVO) obj;
		return itemcount == other.itemcount && Objects.equals(itemid, other.itemid)
				&& Objects.equals(itemname, other.itemname) && itemprice == other.itemprice
				&& Objects.equals(userid, other.userid);
	}

	@Override
	public String toString() {
		return "ItemVO [itemid=" + itemid + ", itemname=" + itemname + ", itemprice=" + itemprice + ", itemcount="
				+ itemcount + ", userid=" + userid + "]";
	}	

}
