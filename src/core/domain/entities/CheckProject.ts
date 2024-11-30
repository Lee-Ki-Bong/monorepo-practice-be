import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("_check_project", { schema: "makeshop" })
export class CheckProject {
  @PrimaryGeneratedColumn({ type: "smallint", name: "pid", unsigned: true })
  pid: number;

  @Column("varchar", { name: "project_name", length: 30 })
  projectName: string;

  @Column("longtext", { name: "project_desc", nullable: true })
  projectDesc: string | null;
}
