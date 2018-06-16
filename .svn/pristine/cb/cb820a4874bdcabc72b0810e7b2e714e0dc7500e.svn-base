package org.sdrc.bbbp.repository;

import java.util.List;

import org.sdrc.bbbp.domain.LoginAudit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginAuditRepository extends JpaRepository<LoginAudit, Integer> {

	LoginAudit findBySessionIdAndActiveTrue(String id);

	List<LoginAudit> findByActiveTrue();

}
