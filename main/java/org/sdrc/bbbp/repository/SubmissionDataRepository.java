package org.sdrc.bbbp.repository;

import java.util.List;

import org.sdrc.bbbp.domain.SubmissionData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

public interface SubmissionDataRepository extends JpaRepository<SubmissionData, Long> {
	
	
	@Transactional
	//SubmissionData save(SubmissionData submissionData);
	
	SubmissionData findBySubmissionId(Long sId);
	
	SubmissionData findByUserUserIdAndPeriodReferencePeriodReferenceIdAndYearYearIdAndIsSubmitFalse(Integer userId,Integer periodRefId,Integer yearId);
	
	SubmissionData findByUserUserIdAndPeriodReferencePeriodReferenceIdAndYearYearId(Integer userId,Integer periodRefId,Integer yearId);
	
	List<SubmissionData> findByUserUserIdAndIsSubmitFalse(Integer userId);
	
	List<SubmissionData> findByUserUserId(Integer userId);
	
	

}
