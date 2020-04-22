import { UserService } from "../service/user.service";
import { FriendEntity } from "../model/entity/tutorial.entity";
import { BaseRepository } from "./base.repository";
import { Injectable } from "../../decorator/injection/injectable.decorator";

@Injectable()
export class FriendService extends BaseRepository<FriendEntity> {

    private _userService: UserService;

    public constructor(userService: UserService) {
        super(FriendEntity);
        this._userService = userService;
    }

    public async addFriendAsync(username, friendId): Promise<void> {
        const user = await this._userService.getSingleByAsync({ username: username });
        const friend = new FriendEntity();
        friend.userId = user.id;
        friend.friendId = friendId;

        await super.getRepository().save(friend);
    }

    public async removeFriendAsync(username, friendId): Promise<void> {
        const user = await this._userService.getSingleByAsync({ username: username });
        const friend = await this.getSingleByAsync({ userId: user.id, friendId: friendId });

        await super.getRepository().remove(friend);
    }
}
