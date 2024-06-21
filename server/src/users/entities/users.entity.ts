import { Exclude } from "class-transformer";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Profile } from "./profile.entity";
import { UserRole } from "../enums/users.enum";

@Entity({
  name: "users",
})
export class User {
  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Index("idx_email_users", {
    unique: true,
  })
  @Column()
  email: string;

  @Column()
  phone: string;

  @Exclude()
  @Column()
  password: string;

  @OneToOne(() => Profile, (profile) => profile.user, {
    cascade: true,
  }) // specify inverse side as a second parameter
  @JoinColumn()
  profile: Profile;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.CUSTOMER,
  })
  role: UserRole;

  @Column({
    nullable: true,
    type: "timestamp",
  })
  deletedAt: Date;

  @CreateDateColumn({
    type: "timestamp",
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: "timestamp",
  })
  updatedAt: Date;

  // Method to soft delete user
  softDelete() {
    this.deletedAt = new Date();
    this.email = `${this.email}_${this.id}_deleted`;
  }
}
