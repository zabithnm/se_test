package com.ems.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ems.models.Job;
import com.ems.models.Uniqe;
import com.ems.services.JobService;

@CrossOrigin("*")
@RestController
public class JobController {

	@Autowired
	JobService jobService;
	
	@RequestMapping(value = "job", method = RequestMethod.GET)
	List<Job> getJob(){
		return jobService.getJobs();
	}
	
	@RequestMapping(value = "job", method = RequestMethod.POST)
	void addJob(@RequestBody Job job){
		jobService.addJob(job);
	}
	
	@RequestMapping(value = "job", method = RequestMethod.PUT)
	void updateJob(@RequestBody Job job) {
		jobService.updateJob(job);
	}
	
	@RequestMapping(value = "job/{id}", method = RequestMethod.DELETE)
	void deleteJob(@PathVariable int id) {
		jobService.deleteJob(id);
	}
	
	@RequestMapping(value = "job", method = RequestMethod.PATCH)
	boolean checkUniqId(@RequestBody Uniqe uniqe) {
		
		return jobService.checkUniqId(uniqe.getId());
	}
}
