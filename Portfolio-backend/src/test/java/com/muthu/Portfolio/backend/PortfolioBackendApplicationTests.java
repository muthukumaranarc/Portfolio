package com.muthu.Portfolio.backend;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@ExtendWith(MockitoExtension.class)
class PortfolioBackendApplicationTests {

	@Mock
	private ResumeDriveLinkRepository resumeDriveLinkRepository;

	@InjectMocks
	private ResumeDriveLinkController controller;

	@Test
	void shouldStoreResumeDriveLinkFromRequest() {
		ResumeDriveLink savedLink = new ResumeDriveLink();
		savedLink.setId("1");
		savedLink.setResumeDriveLink("https://drive.google.com/file/d/123");
		when(resumeDriveLinkRepository.save(any(ResumeDriveLink.class))).thenReturn(savedLink);

		ResumeDriveLink request = new ResumeDriveLink();
		request.setResumeDriveLink("https://drive.google.com/file/d/123");

		ResponseEntity<ResumeDriveLink> response = controller.createResumeDriveLink(request);

		assertEquals(HttpStatus.CREATED, response.getStatusCode());
		assertEquals("https://drive.google.com/file/d/123", response.getBody().getResumeDriveLink());
		verify(resumeDriveLinkRepository).save(any(ResumeDriveLink.class));
	}
}
