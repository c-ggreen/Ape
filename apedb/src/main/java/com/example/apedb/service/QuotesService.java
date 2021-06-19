package com.example.apedb.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.example.apedb.model.Quotes;
import com.example.apedb.repository.QuotesRepository;

@Service
public class QuotesService {
	@Autowired
	QuotesRepository quotesrepository;
	
	// get all items
	public Iterable<Quotes> getItems() {
		return quotesrepository.findAll();
	}
	
	// get items by id
	public Quotes getItemByID(Long id) {
		return quotesrepository.findById(id).get();
	}
	
	// post / create
	public Quotes createItem(Quotes item) {
		return quotesrepository.save(item);
	}
	
	// update our items
	public Quotes updateItems(Quotes item) {
		return quotesrepository.save(item);
	}
	
	// delete items
	public HttpStatus deleteItem(Long id) {
		quotesrepository.deleteById(id);
		return HttpStatus.OK;
	}
}
