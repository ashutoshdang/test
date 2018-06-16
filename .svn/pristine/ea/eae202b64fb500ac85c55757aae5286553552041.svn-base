package org.sdrc.bbbp.jobs;

import java.util.Calendar;

import org.sdrc.bbbp.domain.Year;
import org.sdrc.bbbp.repository.YearRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

@Service
public class QuarterlyJob {
	@Autowired
	YearRepository yearRepository;

	@Scheduled(cron = "0 2 0 1 4 ?")
	public void quarterlyJob() {

		Calendar calendar = Calendar.getInstance();
		int year = calendar.get(Calendar.YEAR);
		Year lastYear = yearRepository.findTop1ByOrderByYearIdDesc();

		if (yearRepository.findByYearRange(year + "-" + (year + 1)) == null) {
			Year yearLatest = new Year();
			yearLatest.setYearRange(year + "-" + (year + 1));
			yearLatest.setOrderBy(lastYear.getOrderBy() + 1);
			yearRepository.save(yearLatest);
		}
	}

}
