package com.ems.repository;

import org.springframework.data.repository.CrudRepository;

import com.ems.models.Job;

public interface JobRepository extends CrudRepository<Job, Integer>{

}
