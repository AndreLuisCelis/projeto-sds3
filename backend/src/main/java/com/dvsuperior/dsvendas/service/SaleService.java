package com.dvsuperior.dsvendas.service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dvsuperior.dsvendas.dto.SaleDTO;
import com.dvsuperior.dsvendas.dto.SaleSuccessDTO;
import com.dvsuperior.dsvendas.dto.SaleSumDTO;
import com.dvsuperior.dsvendas.entities.Sale;
import com.dvsuperior.dsvendas.repositories.SaleRepository;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository repository;
	
	@Autowired
	private SellerService selleService;
	
	@Transactional
	public Page<SaleDTO> findAll(Pageable pageable){
		selleService.findAll();
		Page<Sale> result = this.repository.findAll(pageable);
		return result.map(x -> new SaleDTO(x));
	}
	
	@Transactional
	public List<SaleSumDTO> amountGrupedBySeller(){
		return repository.amountGrupedBySeller();
	}
	
	@Transactional
	public List<SaleSuccessDTO> successGrupedBySeller(){
		return repository.successGrupedBySeller();
	}

}
