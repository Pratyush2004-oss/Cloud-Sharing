package in.pratyush.cloudShareapi.service;

import java.time.Instant;

import org.springframework.stereotype.Service;

import in.pratyush.cloudShareapi.document.ProfileDocument;
import in.pratyush.cloudShareapi.dto.ProfileDTO;
import in.pratyush.cloudShareapi.repository.ProfileRespository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProfileService {
    private final ProfileRespository profileRespository;

    // create profile
    public ProfileDTO createProfile(ProfileDTO profileDTO) {
        if (profileRespository.existsByClerkId(profileDTO.getClerkId())) {
            return updateProfile(profileDTO);
        }

        ProfileDocument profile = ProfileDocument.builder()
                .clerkId(profileDTO.getClerkId())
                .email(profileDTO.getEmail())
                .firstName(profileDTO.getFirstName())
                .lastName(profileDTO.getLastName())
                .photoUrl(profileDTO.getPhotoUrl())
                .credits(5)
                .createdDate(Instant.now())
                .build();
        profile = profileRespository.save(profile);
        return ProfileDTO.builder()
                .id(profile.getId())
                .clerkId(profile.getClerkId())
                .email(profile.getEmail())
                .firstName(profile.getFirstName())
                .lastName(profile.getLastName())
                .photoUrl(profile.getPhotoUrl())
                .credits(profile.getCredits())
                .createdDate(profile.getCreatedDate())
                .build();
    }

    // update profile
    public ProfileDTO updateProfile(ProfileDTO profileDTO) {
        ProfileDocument existingProfile = profileRespository.findByClerkId(profileDTO.getClerkId());
        if (existingProfile != null) {
            // update fields if provided
            if (profileDTO.getEmail() != null && !profileDTO.getEmail().isEmpty()) {
                existingProfile.setEmail(profileDTO.getEmail());
            }
            if (profileDTO.getFirstName() == null && !profileDTO.getFirstName().isEmpty()) {
                existingProfile.setFirstName(profileDTO.getFirstName());
            }
            if (profileDTO.getLastName() == null && !profileDTO.getLastName().isEmpty()) {
                existingProfile.setLastName(profileDTO.getLastName());
            }
            if (profileDTO.getPhotoUrl() == null && !profileDTO.getLastName().isEmpty()) {
                existingProfile.setPhotoUrl(profileDTO.getLastName());
            }
            existingProfile = profileRespository.save(existingProfile);
            return ProfileDTO.builder()
                    .id(existingProfile.getId())
                    .clerkId(existingProfile.getClerkId())
                    .email(existingProfile.getEmail())
                    .firstName(existingProfile.getFirstName())
                    .lastName(existingProfile.getLastName())
                    .photoUrl(existingProfile.getPhotoUrl())
                    .credits(existingProfile.getCredits())
                    .createdDate(existingProfile.getCreatedDate())
                    .build();
        }
        return null;
    }

    // get profile by clerkId
    public boolean existsByClerkId(String clerkId) {
        return profileRespository.existsByClerkId(clerkId);
    }

    // delete profile
    public void deleteProfile(String clerkId) {
        ProfileDocument existingProfile = profileRespository.findByClerkId(clerkId);
        if(existingProfile != null){
            profileRespository.delete(existingProfile);
        }
    }

}
