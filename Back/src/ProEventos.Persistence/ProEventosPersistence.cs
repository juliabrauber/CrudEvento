using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProEventos.Domain;

namespace ProEventos.Persistence
{
    public class ProEventosPersistence : IProEventosPersistence
    {
        private readonly ProEventosContext _context;
        public ProEventosPersistence(ProEventosContext context){
            _context = context;
        }

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
 
        }

        public void Update<T>(T entity) where T : class
        {
             _context.Update(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
             _context.Remove(entity);
        }

        public void DeleteRange<T>(T[] entityArray) where T : class
        {
            _context.RemoveRange(entityArray);
        }
        
        public async Task<bool> SaveChangesAsvnc()
        {
            return (await _context.SaveChangesAsync()) > 0;
        }

         public Task<Evento[]> GetAllEventosByTemaAsync(string tema, bool includePalestrantes)
        {
            throw new NotImplementedException();
        }

        public Task<Evento[]> GetAllEventosAsync(bool includePalestrantes)
        {
            throw new NotImplementedException();
        }
        
        public Task<Evento> GetEventoByIdAsync(string EventoId, bool includePalestrantes)
        {
            throw new NotImplementedException();
        }
        
        public Task<Palestrante[]> GetAllPalestrantesByNomeAsync(string Nome, bool includeEventos)
        {
            throw new NotImplementedException();
        }

        public Task<Palestrante[]> GetAllPalestrantesAsync(bool includeEventos)
        {
            throw new NotImplementedException();
        }

        public Task<Palestrante> GetEPalestranteByIdAsync(string PalestranteId, bool includeEventos)
        {
            throw new NotImplementedException();
        }


    }
}