import { Plus, UserPlus, MoreHorizontal } from "lucide-react";

const teamMembers = [
    {
        name: "Dra. Ana Silva",
        status: "ativo no sistema",
        role: "Administrador",
        avatar: "https://i.pravatar.cc/150?u=ana-silva",
    },
    {
        name: "Dr. Lucas Ferraz",
        status: "ativo no sistema",
        role: "Dentista",
        avatar: "https://i.pravatar.cc/150?u=lucas",
    },
    {
        name: "Mariana Santos",
        status: "ativo no sistema",
        role: "Recepcionista",
        avatar: "https://i.pravatar.cc/150?u=mariana",
    },
];

export function EquipeSettings() {
    return (
        <div className="bg-white rounded-[14px] border border-slate-200 shadow-sm overflow-hidden p-8">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-8">
                <div>
                    <h2 className="text-[20px] font-bold text-slate-900 leading-[28px]">
                        Gestão de Equipe
                    </h2>
                    <p className="text-[14px] text-slate-500 font-medium mt-1">
                        Controle os usuários e níveis de acesso ao sistema.
                    </p>
                </div>
                <button className="flex items-center justify-center h-10 px-4 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold rounded-lg shadow-sm transition-colors">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Novo Usuário
                </button>
            </div>

            <div className="border border-slate-200 rounded-xl overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50 border-b border-slate-200">
                            <th className="py-4 px-6 text-[13px] font-semibold text-slate-500">
                                Colaborador
                            </th>
                            <th className="py-4 px-6 text-[13px] font-semibold text-slate-500">
                                Cargo / Permissão
                            </th>
                            <th className="py-4 px-6 text-[13px] font-semibold text-slate-500 w-[100px] text-right">
                                Ações
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {teamMembers.map((member, index) => (
                            <tr
                                key={index}
                                className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors"
                            >
                                <td className="py-4 px-6">
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={member.avatar}
                                            alt={member.name}
                                            className="w-10 h-10 rounded-full border border-slate-200 object-cover"
                                        />
                                        <div className="flex flex-col">
                                            <span className="text-[14px] font-semibold text-slate-900">
                                                {member.name}
                                            </span>
                                            <span className="text-[13px] text-slate-500">
                                                {member.status}
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4 px-6">
                                    <span className="text-[14px] font-medium text-slate-700">
                                        {member.role}
                                    </span>
                                </td>
                                <td className="py-4 px-6 text-right">
                                    <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors rounded-lg hover:bg-slate-100">
                                        <MoreHorizontal className="w-5 h-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
