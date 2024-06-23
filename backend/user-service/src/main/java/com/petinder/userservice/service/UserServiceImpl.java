package com.petinder.userservice.service;

import com.petinder.userservice.dto.create.CreateUserInput;
import com.petinder.userservice.dto.create.CreateUserOutput;
import com.petinder.userservice.dto.delete.DeleteUserInput;
import com.petinder.userservice.dto.delete.DeleteUserOutput;
import com.petinder.userservice.dto.list.ListUserInput;
import com.petinder.userservice.dto.list.ListUserOutput;
import com.petinder.userservice.dto.read.ReadUserInput;
import com.petinder.userservice.dto.read.ReadUserOutput;
import com.petinder.userservice.dto.update.UpdateUserInput;
import com.petinder.userservice.dto.update.UpdateUserOutput;
import com.petinder.userservice.exception.UserNotFound;
import com.petinder.userservice.mapper.UserMapper;
import com.petinder.userservice.model.User;
import com.petinder.userservice.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserMapper userMapper;
    private final UserRepository userRepository;

    @Override
    public CreateUserOutput createUser(
            CreateUserInput input
    ) {
        User user = userMapper.createUserInputToUser(input);
        user = userRepository.save(user);
        return userMapper.userToCreateUserOutput(user);
    }

    @Override
    public ReadUserOutput readUser(
            ReadUserInput input
    ) {
        User user = userRepository.findById(input.getUserId())
                .orElseThrow(UserNotFound::new);
        return userMapper.userToReadUserOutput(user);
    }

    @Override
    public UpdateUserOutput updateUser(
            UpdateUserInput input
    ) {
        User user = userRepository.findById(input.getUserId())
                .orElseThrow(UserNotFound::new);
        user = userMapper.updateUserInputToUser(input, user);
        user = userRepository.save(user);
        return userMapper.userToUpdateUserOutput(user);
    }

    @Override
    public DeleteUserOutput deleteUser(
            DeleteUserInput input
    ) {
        if (!userRepository.existsById(input.getUserId())) throw new UserNotFound();

        userRepository.deleteById(input.getUserId());
        return new DeleteUserOutput();
    }

    @Override
    public ListUserOutput listUser(
            ListUserInput input
    ) {
        Page<User> userPage = userRepository.findAll(input.getPageable());

        // Calculate the next page
        int size = userPage.getSize();
        int total = userPage.getTotalPages();
        int nextPage = 0;
        if (total > 0) {
            nextPage = (userPage.getNumber() + 1) % total;
        }

        // Users output
        List<ReadUserOutput> users = userPage.getContent().stream()
                .map(userMapper::userToReadUserOutput)
                .toList();

        return userMapper.toListUserOutput(users, nextPage, size, total);
    }
}
