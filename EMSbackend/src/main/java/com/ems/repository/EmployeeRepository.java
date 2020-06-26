package com.ems.repository;

import org.springframework.data.repository.CrudRepository;

import com.ems.models.Employee;

public interface EmployeeRepository extends CrudRepository<Employee, Integer>{

}
