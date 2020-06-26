package com.ems.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ems.models.Department;
import com.ems.repository.DepartmentRepository;

@Service
public class DepartmentService {
	
	@Autowired
	DepartmentRepository departmentRepository;
	
	public List<Department> getDeprarments() {
		List<Department> departments = (List<Department>) departmentRepository.findAll();
		return departments;
	}

	public void addDepartment(Department department) {
		departmentRepository.save(department);
	}
	
	public void updateDepartment(Department department) {
		departmentRepository.save(department);
	}
	
	public void deleteDepartment(Department department) {
		departmentRepository.delete(department);
	}
}
