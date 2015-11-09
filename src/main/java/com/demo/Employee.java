package com.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Employee {

	private @Id @GeneratedValue Long id;
	private String name;


	private Employee() {}

	public Employee(String name) {
		this.name = name;
	}
}
