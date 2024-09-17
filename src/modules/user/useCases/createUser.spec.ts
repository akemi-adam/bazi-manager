import { faker } from '@faker-js/faker';
import { UserRepositoryInMemory } from "../repositories/UserRepositoryInMemory"
import { CreateUser } from "./createUser"
import { compare } from 'bcrypt';

let createUser: CreateUser
let userRepositoryInMemory: UserRepositoryInMemory

describe('Create User', () => {
    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory()
        createUser = new CreateUser(userRepositoryInMemory)
    })

    it('Should be able to create user', async () => {
        expect(userRepositoryInMemory.users).toEqual([])

        const user = await createUser.execute({
            email: faker.internet.email(),
            name: faker.internet.userName(),
            password: faker.internet.password(),
        })

        expect(userRepositoryInMemory.users).toEqual([user])
    })

    it('Should be able to create user with password encrypted', async () => {
        const passwordWithoutEncryption: string = faker.internet.password()

        const user = await createUser.execute({
            email: faker.internet.email(),
            name: faker.internet.userName(),
            password: passwordWithoutEncryption,
        })

        const userHasPasswordEncrypted = await compare(passwordWithoutEncryption, user.password)

        expect(userHasPasswordEncrypted).toBeTruthy()
    })
})