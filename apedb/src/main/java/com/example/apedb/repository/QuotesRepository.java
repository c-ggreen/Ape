package com.example.apedb.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.apedb.model.Quotes;

public interface QuotesRepository extends CrudRepository<Quotes, Long> {

}
