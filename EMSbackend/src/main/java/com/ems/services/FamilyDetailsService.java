package com.ems.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ems.models.FamilyDetails;
import com.ems.repository.FamilyDetailsRepository;

@Service
public class FamilyDetailsService {

	@Autowired
	FamilyDetailsRepository familyDetailsRepository;
	
	public List<FamilyDetails> getFamilyDetails(int id) {
		List<FamilyDetails> familyDetails = (List<FamilyDetails>) familyDetailsRepository.findAllByEmployee(id);
		return familyDetails;
	}
	
	public void addFamilyDetails(FamilyDetails familyDetails) {
		familyDetailsRepository.save(familyDetails);
	}
	
	public void updateFamilyDetails(FamilyDetails familyDetails) {
		familyDetailsRepository.save(familyDetails);
	}
	
	public void deleteFamilyDetails(int id) {
		familyDetailsRepository.deleteById(id);
	}
}
