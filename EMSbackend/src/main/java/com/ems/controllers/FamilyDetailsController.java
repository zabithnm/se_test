package com.ems.controllers;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ems.models.FamilyDetails;
import com.ems.models.Job;
import com.ems.services.FamilyDetailsService;

@CrossOrigin("*")
@RestController
public class FamilyDetailsController {

	@Autowired
	FamilyDetailsService detailsService;
	
	@RequestMapping(value = "familyDetails", method = RequestMethod.GET)
	List<FamilyDetails> getFamilyDetails(){
		return detailsService.getFamilyDetails();
	}
	
	@RequestMapping(value = "familyDetails", method = RequestMethod.POST)
	void addFamilyDetails(@RequestBody FamilyDetails familyDetails){
		detailsService.addFamilyDetails(familyDetails);
	}
	
	@RequestMapping(value = "familyDetails", method = RequestMethod.PUT)
	void updateFamilyDetails(@RequestBody FamilyDetails familyDetails) {
		detailsService.updateFamilyDetails(familyDetails);
	}
	
	@RequestMapping(value = "familyDetails/{id}", method = RequestMethod.DELETE)
	void deleteFamilyDetails(@PathVariable int id) {
		detailsService.deleteFamilyDetails(id);
	}
}
