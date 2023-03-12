package kf.dgs.demo1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
public class Demo1Application {
	@GetMapping("/")
	public String hello() {
		return "Hello World!";
	}
	public static void main(String[] args) {
		SpringApplication.run(Demo1Application.class, args);
	}

}
