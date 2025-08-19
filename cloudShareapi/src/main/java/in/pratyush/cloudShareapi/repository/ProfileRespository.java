package in.pratyush.cloudShareapi.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import in.pratyush.cloudShareapi.document.ProfileDocument;

public interface ProfileRespository extends MongoRepository<ProfileDocument, String> {
    Optional<ProfileDocument> findByEmail(String email);

    ProfileDocument findByClerkId(String clerkId);

    boolean existsByClerkId(String clerkId);

}
