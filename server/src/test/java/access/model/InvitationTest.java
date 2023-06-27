package access.model;

import access.manage.EntityType;
import org.junit.jupiter.api.Test;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;

class InvitationTest {

    @Test
    void constructorWithoutDefaults() {
        Role role = new Role("mail", "description", "https://landingpage.com", "1", EntityType.SAML20_SP, 30);

        Invitation invitation = new Invitation(Authority.GUEST, "hash", "john@example.com", false, "Please join..",new User(),
                null, Set.of(new InvitationRole(role)));

        assertEquals(13, Instant.now().until(invitation.getExpiryDate(), ChronoUnit.DAYS));
        assertEquals(29, Instant.now().until(invitation.getRoleExpiryDate(), ChronoUnit.DAYS));
    }

    @Test
    void constructorWithDefaults() {
        Role role = new Role("mail", "description", "https://landingpage.com", "1", EntityType.SAML20_SP, null);

        Invitation invitation = new Invitation(Authority.MANAGER, "hash", "john@example.com", false, "Please join..",new User(),
                null, Set.of(new InvitationRole(role)));
        assertEquals(13, Instant.now().until(invitation.getExpiryDate(), ChronoUnit.DAYS));
        assertNull(invitation.getRoleExpiryDate());
    }

}