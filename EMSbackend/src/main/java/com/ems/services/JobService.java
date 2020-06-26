package com.ems.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ems.models.Job;
import com.ems.repository.JobRepository;

@Service
public class JobService {

	@Autowired
	JobRepository jobRepository;
	
	public List<Job> getJobs() {
		List<Job> jobs = (List<Job>) jobRepository.findAll();
		return jobs;
	}
	
	public void addJob(Job job) {
		jobRepository.save(job);
	}
	
	public void updateJob(Job job) {
		jobRepository.save(job);
	}
	
	public void deleteJob(Job job) {
		jobRepository.delete(job);
	}
}
