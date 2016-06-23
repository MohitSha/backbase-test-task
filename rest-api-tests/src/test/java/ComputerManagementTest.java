import enums.Companies;
import fabricator.Calendar;
import fabricator.Fabricator;
import fabricator.enums.DateFormat;
import helpers.RandomDataGenerator;
import helpers.TestPropsLoader;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import static enums.CreateComputerParams.COMPANY_ID;
import static enums.CreateComputerParams.COMPUTER_NAME;
import static enums.CreateComputerParams.DISCONTINUED_DATE;
import static enums.CreateComputerParams.INTRODUCED_DATE;
import static io.restassured.RestAssured.given;

/**
 * This class will contain tests that cover CRDU operations on Computers
 */

public class ComputerManagementTest extends BaseTest{

	private Calendar calendar;

	@BeforeClass
	public void setup() {
		calendar = Fabricator.calendar();
	}

	@Test
	public void testCreateComputer() {
		final Companies company = Companies.getRandomCompany();
		final String computerName = RandomDataGenerator.getComputerName();
		final String introducedDate = calendar.randomDate().asString(DateFormat.yyyy_MM_dd);
		final String discontinuedDate = calendar.randomDate().asString(DateFormat.yyyy_MM_dd);
		final int companyId = company.getId();
		logger.info(String.format("Creating %s with %s introduction date and %s discontinuation date for %s company",
				computerName,
				introducedDate,
				discontinuedDate,
				company.getName()));
		given()
				.param(COMPUTER_NAME.getName(), computerName)
				.param(INTRODUCED_DATE.getName(), introducedDate)
				.param(DISCONTINUED_DATE.getName(), discontinuedDate)
				.param(COMPANY_ID.getName(), companyId)
				.when()
				.post(TestPropsLoader.getBaseUrl() + "/computers")
				.then()
				.statusCode(200);

	}
}
