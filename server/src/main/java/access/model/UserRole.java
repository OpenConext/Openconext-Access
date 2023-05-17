package access.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;
import java.io.Serializable;
import java.time.Instant;

@Entity(name = "user_roles")
@NoArgsConstructor
@Getter
@Setter
public class UserRole implements Serializable, RemoteSCIMIdentifier {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "remote_scim_identifier")
    private String remoteScimIdentifier;

    @Column(name = "inviter")
    private String inviter;

    @Column(name = "end_date")
    private Instant endDate;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private User user;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "role_id")
    private Role role;

    public UserRole(Role role, String inviter, Instant endDate) {
        this.role = role;
        this.inviter = inviter;
        this.endDate = endDate;
    }

}