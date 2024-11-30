import { Column, Entity } from "typeorm";

@Entity("personal_reply_score", { schema: "makeshop" })
export class PersonalReplyScore {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "id", length: 20 })
  id: string;

  @Column("varchar", { primary: true, name: "date", length: 14 })
  date: string;

  @Column("varchar", { name: "reply_text", nullable: true, length: 200 })
  replyText: string | null;

  @Column("tinyint", { name: "reply_score", default: () => "'0'" })
  replyScore: number;

  @Column("datetime", {
    name: "insert_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  insertDate: Date;
}
