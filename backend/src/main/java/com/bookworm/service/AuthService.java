package main.java.com.bookworm.service;

import com.bookworm.model.User;
import com.bookworm.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    public String login(String username, String password) {
        User user = userRepository.findByUsername(username);
        if (user != null && user.getPassword().equals(password)) {
            return "Login Successful";
        }
        return "Invalid Credentials";
    }
}
