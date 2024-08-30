package com.petinder.userservice.service;

import com.petinder.userservice.dto.EmptyResponse;
import com.petinder.userservice.dto.pet.like.LikePetInput;
import com.petinder.userservice.dto.pet.list.ListUserPetInput;
import com.petinder.userservice.dto.pet.list.ListUserPetOutput;
import com.petinder.userservice.dto.pet.recommend.RecommendPetInput;
import com.petinder.userservice.dto.pet.recommend.RecommendPetOutput;
import com.petinder.userservice.dto.user.create.CreateUserInput;
import com.petinder.userservice.dto.user.create.CreateUserOutput;
import com.petinder.userservice.dto.user.delete.DeleteUserInput;
import com.petinder.userservice.dto.user.delete.DeleteUserOutput;
import com.petinder.userservice.dto.user.list.ListUserInput;
import com.petinder.userservice.dto.user.list.ListUserOutput;
import com.petinder.userservice.dto.user.read.ReadUserInput;
import com.petinder.userservice.dto.user.read.ReadUserOutput;
import com.petinder.userservice.dto.user.update.UpdateUserInput;
import com.petinder.userservice.dto.user.update.UpdateUserOutput;

public interface UserService {
    CreateUserOutput createUser(CreateUserInput input);

    ReadUserOutput readUser(ReadUserInput input);

    UpdateUserOutput updateUser(UpdateUserInput input);

    DeleteUserOutput deleteUser(DeleteUserInput input);

    ListUserOutput listUser(ListUserInput input);

    /**
     * Perform pet recommendation based on the current user
     *
     * @param input dto for pet recommendation
     * @return the recommendation
     */
    RecommendPetOutput recommendPet(RecommendPetInput input);

    EmptyResponse likePet(final LikePetInput input);

    ListUserPetOutput listLikePet(ListUserPetInput input);

    EmptyResponse dislikePet(final LikePetInput input);

    ListUserPetOutput listDislikePet(ListUserPetInput input);
}
