package com.app.FlightCommon.Model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "users")
public class User implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private int userId;

	@Column(name = "user_name")
	private String userName;
	
	@Column(name = "user_pass")
	private String password;
	
	@Column(name = "role")
	private String role;

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}	
}

/*
 * @Entity
 * 
 * @Table(name = "es_accounts") // @NamedQuery(name="EsAccount.findAll",
 * query="SELECT e FROM EsAccount e") public class EsAccount implements
 * Serializable { private static final long serialVersionUID = 1L;
 * 
 * @Id
 * @GeneratedValue(strategy = GenerationType.IDENTITY)
 * @Column(name = "account_id") private int accountId;
 * 
 * @Column(name = "account_type") private String accountType;
 * 
 * // bi-directional many-to-one association to EsAdvertiser
 * 
 * @OneToMany(mappedBy = "esAccount", cascade = CascadeType.ALL) private
 * List<EsAdvertiser> esAdvertisers;
 * 
 * // bi-directional many-to-one association to EsAgent
 * 
 * @OneToMany(mappedBy = "esAccount") private List<EsAgent> esAgents;
 * 
 * // bi-directional many-to-one association to EsUser
 * 
 * @OneToMany(mappedBy = "esAccount", cascade = CascadeType.ALL) private
 * List<EsUser> esUsers;
 * 
 * public EsAccount() { }
 * 
 * public int getAccountId() { return this.accountId; }
 * 
 * public void setAccountId(int accountId) { this.accountId = accountId; }
 * 
 * public String getAccountType() { return this.accountType; }
 * 
 * public void setAccountType(String accountType) { this.accountType =
 * accountType; }
 * 
 * public List<EsAdvertiser> getEsAdvertisers() { return this.esAdvertisers; }
 * 
 * public void setEsAdvertisers(List<EsAdvertiser> esAdvertisers) {
 * esAdvertisers.forEach(v -> v.setEsAccount(this)); this.esAdvertisers =
 * esAdvertisers; }
 * 
 * public List<EsAgent> getEsAgents() { return this.esAgents; }
 * 
 * public void setEsAgents(List<EsAgent> esAgents) { this.esAgents = esAgents; }
 * 
 * public List<EsUser> getEsUsers() { return this.esUsers; }
 * 
 * public void setEsUsers(List<EsUser> esUsers) { esUsers.forEach(v ->
 * v.setEsAccount(this)); this.esUsers = esUsers; }
 * 
 * }
 */
