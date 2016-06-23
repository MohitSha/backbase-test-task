package enums;

public enum CreateComputerParams {
	COMPUTER_NAME("name"),
	INTRODUCED_DATE("introduced"),
	DISCONTINUED_DATE("discontinued"),
	COMPANY_ID("company");

	private String paramName;

	public String getName() {
		return paramName;
	}

	CreateComputerParams(String paramName) {

		this.paramName = paramName;
	}
}
