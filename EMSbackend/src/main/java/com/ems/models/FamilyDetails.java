package com.ems.models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "familydetails")
public class FamilyDetails {

	@Id
	private int id;
	private String name;
	private String occupation;
	private String relationship;
	private int employee;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getOccupation() {
		return occupation;
	}
	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}
	public String getRelationship() {
		return relationship;
	}
	public void setRelationship(String relationship) {
		this.relationship = relationship;
	}
	public int getEmployee() {
		return employee;
	}
	public void setEmployee(int employee) {
		this.employee = employee;
	}
	
	
}
