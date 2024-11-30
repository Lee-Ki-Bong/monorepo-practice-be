import { Column, Entity, Index } from "typeorm";

@Index("age", ["adminuser", "birthYear"], {})
@Index("birth", ["adminuser", "birthMonth", "birthDay"], {})
@Entity("user_birth", { schema: "makeshop" })
export class UserBirth {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "user_id", length: 40 })
  userId: string;

  @Column("char", { name: "birth_year", length: 4 })
  birthYear: string;

  @Column("char", { name: "birth_month", length: 2 })
  birthMonth: string;

  @Column("char", { name: "birth_day", length: 2 })
  birthDay: string;

  @Column("enum", {
    name: "gender",
    enum: ["M", "F", "N"],
    default: () => "'N'",
  })
  gender: "M" | "F" | "N";
}
