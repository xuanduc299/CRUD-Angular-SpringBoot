package com.nxd.CRUDSpringBoot.CRUDSpringBoot.repository;

import com.nxd.CRUDSpringBoot.CRUDSpringBoot.entity.Personal;
import com.nxd.CRUDSpringBoot.CRUDSpringBoot.entity.Tutorial;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonalRepository extends JpaRepository<Personal,Integer> {
}
