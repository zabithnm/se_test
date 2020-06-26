package com.ems.repository;

import org.springframework.data.repository.CrudRepository;

import com.ems.models.Department;

public interface DepartmentRepository extends CrudRepository<Department, Integer>{

}
