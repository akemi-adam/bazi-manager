interface UserSchema {
    id?: string
    name: string
    email: string
    password: string
    created_at?: Date
    updated_at?: Date
    deleted_at?: Date
}

export class User {
    props: UserSchema
    // _id: string

    constructor(props: UserSchema) {
        this.props = props
    }

    get id(): string|undefined {
        return this.props.id
    }

    get name(): string {
        return this.props.name
    }

    get email(): string {
        return this.props.email
    }

    get password(): string {
        return this.props.password
    }

    get created_at(): Date|undefined {
        return this.props.created_at
    }

    get updated_at(): Date|undefined {
        return this.props.updated_at
    }

    get deleted_at(): Date|undefined {
        return this.props.deleted_at
    }

    // set id(id: string) {
    //     this.props.id = id
    // }
    
    set name(name: string) {
        this.props.name = name
    }

    set email(email: string) {
        this.props.email = email
    }

    set password(password: string) {
        this.props.password = password
    }

    // set created_at(created_at: Date) {
    //     this.props.created_at = created_at
    // }

    set updated_at(updated_at: Date) {
        this.props.updated_at = updated_at
    }

    set deleted_at(deleted_at: Date) {
        this.props.deleted_at = deleted_at
    }
}