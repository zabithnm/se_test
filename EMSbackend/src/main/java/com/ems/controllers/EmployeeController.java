package com.ems.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ems.models.Employee;
import com.ems.models.Job;
import com.ems.models.Uniqe;
import com.ems.services.EmployeeService;

@CrossOrigin("*")
@RestController
public class EmployeeController {
	
	@Autowired
	EmployeeService employeeService;

	@RequestMapping(value = "employee", method = RequestMethod.GET)
	List<Employee> getEmployee(){
		return employeeService.getEmployees();
	}
	
	@RequestMapping(value = "employee", method = RequestMethod.POST)
	void addEmployee(@RequestBody Employee employee){
		employeeService.addEmployee(employee);
	}
	
	@RequestMapping(value = "employee", method = RequestMethod.PUT)
	void updateEmployee(@RequestBody Employee employee) {
		employeeService.updateEmployee(employee);
	}
	
	@RequestMapping(value = "employee/{id}", method = RequestMethod.DELETE)
	void deleteEmployee(@PathVariable int id) {
		employeeService.deleteEmployee(id);
	}
	
	@RequestMapping(value = "employee", method = RequestMethod.PATCH)
	boolean checkUniqId(@RequestBody Uniqe uniqe) {
		
		return employeeService.checkUniqId(uniqe.getId());
	}
}
