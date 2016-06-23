package helpers;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class TestPropsLoader {
	private static Properties testProperties;

	public static final String TEST_PROPERTIES = "test.properties";
	public static final String BASE_URL = "baseUrl";



	static {
		testProperties = loadProperties();
		testProperties.putAll(System.getProperties());
	}

	private static Properties loadProperties() {
		InputStream is = TestPropsLoader.class.getClassLoader().getResourceAsStream(TEST_PROPERTIES);
		Properties properties = new Properties();
		try {
			properties.load(is);
		} catch (IOException e) {
			System.out.println("[INFO] " + TEST_PROPERTIES + " wasn't not found in classpath.");
		} finally {
			try {
				if (is != null)
					is.close();
			} catch (IOException e) {
			}
		}
		return properties;
	}

	private static String getPropertyAndFailIfMissing(String key) {
		String value = testProperties.getProperty(key);
		if (value == null) {
			throw new RuntimeException(key + " system property is not defined");
		}
		return value;
	}

	public static String getBaseUrl() {
		return getPropertyAndFailIfMissing(BASE_URL);
	}
}
