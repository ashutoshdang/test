package org.sdrc.bbbp.repository;

import java.util.List;

import org.sdrc.bbbp.domain.Area;
import org.springframework.data.repository.RepositoryDefinition;


@RepositoryDefinition(idClass=Integer.class,domainClass=Area.class)
public interface AreaRepository {

	public List<Area> findAll();
	
	public Area findByAreaCode(String areaCode);
	
	public Area save(Area area);

	public Area findByParentAreaId(int parentAreaId);

	public Area findByAreaId(Integer areaId);
}
