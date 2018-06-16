package org.sdrc.bbbp.domain;


import java.util.List;

import org.sdrc.bbbp.models.FeaturePermissionMappingModel;
import org.sdrc.bbbp.models.RoleModel;
import org.sdrc.bbbp.models.ValueObject;

public class RoleFeaturePermissionSchemeModel {
	
	private int roleFeaturePermissionSchemeId;
	
	private String schemeName;
	
	private RoleModel role;
	
	private FeaturePermissionMappingModel featurePermissionMapping;
	
	private String updatedDate;
	
	private String updatedBy;
	
	private List<ValueObject> userRoleFeaturePermissionMappings;

	public int getRoleFeaturePermissionSchemeId() {
		return roleFeaturePermissionSchemeId;
	}

	public String getSchemeName() {
		return schemeName;
	}

	public String getUpdatedDate() {
		return updatedDate;
	}

	public String getUpdatedBy() {
		return updatedBy;
	}

	public List<ValueObject> getUserRoleFeaturePermissionMappings() {
		return userRoleFeaturePermissionMappings;
	}
	
	public void setUserRoleFeaturePermissionMappings(
			List<ValueObject> userRoleFeaturePermissionMappings) {
		this.userRoleFeaturePermissionMappings = userRoleFeaturePermissionMappings;
	}

	public void setRoleFeaturePermissionSchemeId(int roleFeaturePermissionSchemeId) {
		this.roleFeaturePermissionSchemeId = roleFeaturePermissionSchemeId;
	}

	public void setSchemeName(String schemeName) {
		this.schemeName = schemeName;
	}

	public void setUpdatedDate(String updatedDate) {
		this.updatedDate = updatedDate;
	}

	public void setUpdatedBy(String updatedBy) {
		this.updatedBy = updatedBy;
	}

	public RoleModel getRole() {
		return role;
	}

	public void setRole(RoleModel role) {
		this.role = role;
	}

	public FeaturePermissionMappingModel getFeaturePermissionMapping() {
		return featurePermissionMapping;
	}

	public void setFeaturePermissionMapping(FeaturePermissionMappingModel featurePermissionMapping) {
		this.featurePermissionMapping = featurePermissionMapping;
	}

}
