package com.example.apedb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.apedb.model.Management;
import com.example.apedb.service.ManagementService;


@CrossOrigin
@RestController
@RequestMapping("/management")
public class ManagementController {
	@Autowired
	ManagementService managementservice;
	
	@GetMapping
	public Iterable<Management> getItems(){
		return managementservice.getItems();
	}
	
	@PostMapping
	public Management createItem(@RequestBody Management item) {
		return managementservice.createItem(item);
	}
	
	@GetMapping("/{id}")
	public Management getItemById(@PathVariable Long id) {
		return managementservice.getItemById(id);
	}
	
	@PatchMapping
	public Management updateItem(@RequestBody Management item) {
		return managementservice.updateItems(item);
	}
	
	@DeleteMapping("/{id}")
	public HttpStatus deleteItem(@PathVariable Long id) {
		return managementservice.deleteItem(id);
	}
}
