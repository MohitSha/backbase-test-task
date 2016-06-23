package helpers;

import fabricator.Contact;
import fabricator.Fabricator;
import fabricator.Internet;

public class RandomDataGenerator {

	public static String getComputerName() {
		final Internet internet = Fabricator.internet();
		final Contact contact = Fabricator.contact();
		return String.format("%s's %s computer", contact.firstName(), internet.ip());
	}
}
