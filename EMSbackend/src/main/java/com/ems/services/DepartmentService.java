package com.ems.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ems.models.Department;
import com.ems.models.Job;
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
	
	public void deleteDepartment(int id) {
		departmentRepository.deleteById(id);
	}
	
	public boolean checkUniqId(int id) {
		Optional<Department> department = departmentRepository.findById(id);
		return department.isPresent();
	}
}
