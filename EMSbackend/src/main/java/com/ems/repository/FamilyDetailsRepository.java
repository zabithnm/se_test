package com.ems.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.ems.models.FamilyDetails;

public interface FamilyDetailsRepository extends CrudRepository<FamilyDetails, Integer> {
	
	List<FamilyDetails> findAllByEmployee(int id);

}
