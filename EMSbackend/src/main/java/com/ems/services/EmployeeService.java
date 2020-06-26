package com.ems.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ems.models.Employee;
import com.ems.repository.EmployeeRepository;

@Service
public class EmployeeService {
	
	@Autowired
	EmployeeRepository employeeRepository;
	
	public List<Employee> getEmployees(){
		List<Employee> employee = (List<Employee>) employeeRepository.findAll();
		return employee;
	}
	
	public void addEmployee(Employee employee) {
		employeeRepository.save(employee);
	}
	
	public void updateEmployee(Employee employee) {
		employeeRepository.save(employee);
	}
	
	public void deleteEmployee(Employee employee) {
		employeeRepository.delete(employee);
	}
}
