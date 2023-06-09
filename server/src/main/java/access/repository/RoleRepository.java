package access.repository;

import access.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

    @Query(value = "SELECT * FROM roles WHERE MATCH (name, description) against (?1  IN BOOLEAN MODE) " +
            "AND id > 0 LIMIT ?2",
            nativeQuery = true)
    List<Role> search(String keyWord, int limit);

    List<Role> findByManageIdIn(Set<String> manageIdentifiers);

    @Query(value = "SELECT DISTINCT manage_type, manage_id FROM roles", nativeQuery = true)
    List<String[]> findDistinctManageIdentifiers();

    Optional<Role> findByManageIdAndShortNameIgnoreCase(String managerId, String name);

    List<Role> findByName(String name);

}
