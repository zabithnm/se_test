package com.ems.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ems.models.Department;
import com.ems.models.Job;
import com.ems.models.Uniqe;
import com.ems.services.DepartmentService;

@CrossOrigin("*")
@RestController
public class DepartmentController {
	
	@Autowired
	DepartmentService departmentService;

	@RequestMapping(value = "department", method = RequestMethod.GET)
	List<Department> getDepartment(){
		return departmentService.getDeprarments();
	}
	
	@RequestMapping(value = "department", method = RequestMethod.POST)
	void addDepartment(@RequestBody Department department){
		departmentService.addDepartment(department);
	}
	
	@RequestMapping(value = "department", method = RequestMethod.PUT)
	void updateDepartment(@RequestBody Department department) {
		departmentService.updateDepartment(department);
	}
	
	@RequestMapping(value = "department/{id}", method = RequestMethod.DELETE)
	void deleteDepartment(@PathVariable int id) {
		departmentService.deleteDepartment(id);
	}
	
	@RequestMapping(value = "department", method = RequestMethod.PATCH)
	boolean checkUniqId(@RequestBody Uniqe uniqe) {
		
		return departmentService.checkUniqId(uniqe.getId());
	}
}
