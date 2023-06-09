package access.scim;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

import java.io.Serializable;
import java.util.Collections;
import java.util.List;

@Getter
public class GroupPatchRequest implements Serializable {

    private final List<String> schemas = Collections.singletonList("urn:ietf:params:scim:api:messages:2.0:PatchOp");
    private final String externalId;
    private final String id;

    @JsonProperty("Operations")
    private final List<Operation> operations;

    public GroupPatchRequest(String externalId, String id, Operation operation) {
        this.externalId = externalId;
        this.id = id;
        this.operations = Collections.singletonList(operation);
    }
}
