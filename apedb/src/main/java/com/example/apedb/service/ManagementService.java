package com.example.apedb.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.example.apedb.model.Management;
import com.example.apedb.repository.ManagementRepository;

@Service
public class ManagementService {
	@Autowired
	ManagementRepository managementrepository;
	
	public Iterable<Management> getItems(){
		return managementrepository.findAll();
	}
	
	public Management getItemById(Long id) {
		return managementrepository.findById(id).get();
	}
	
	public Management createItem(Management item) {
		return managementrepository.save(item);
	}
	
	public Management updateItems(Management item) {
		return managementrepository.save(item);
	}
	
	public HttpStatus deleteItem(Long id) {
		managementrepository.deleteById(id);
		return HttpStatus.OK;
	}
}
